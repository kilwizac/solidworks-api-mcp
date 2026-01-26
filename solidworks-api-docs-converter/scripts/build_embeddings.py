import argparse
import json

import numpy as np
from sklearn.decomposition import TruncatedSVD
from sklearn.feature_extraction.text import TfidfVectorizer


def doc_text(doc):
    parts = [
        doc.get("title", ""),
        doc.get("summary", ""),
        doc.get("type", ""),
        doc.get("interface", ""),
        doc.get("returns", ""),
        " ".join(doc.get("keywords", []) or []),
        " ".join(doc.get("parameters", []) or []),
    ]
    return " ".join([p for p in parts if p])


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--search", required=True, help="Path to _search_index.json")
    parser.add_argument("--output", required=True, help="Path to output embeddings JSONL")
    parser.add_argument("--meta", required=True, help="Path to output metadata JSON")
    parser.add_argument("--dims", type=int, default=256, help="Embedding dimension")
    parser.add_argument("--max-features", type=int, default=50000)
    args = parser.parse_args()

    with open(args.search, "r", encoding="utf-8") as handle:
        data = json.load(handle)

    docs = data.get("documents", [])
    corpus = [doc_text(doc) for doc in docs]

    vectorizer = TfidfVectorizer(
        max_features=args.max_features,
        ngram_range=(1, 2),
        stop_words="english",
    )
    tfidf = vectorizer.fit_transform(corpus)

    dims = min(args.dims, tfidf.shape[1] - 1) if tfidf.shape[1] > 1 else 1
    svd = TruncatedSVD(n_components=dims, random_state=42)
    embeddings = svd.fit_transform(tfidf)

    with open(args.output, "w", encoding="utf-8") as handle:
        for doc, vector in zip(docs, embeddings):
            handle.write(json.dumps({
                "id": doc.get("id"),
                "type": doc.get("type"),
                "interface": doc.get("interface"),
                "path": doc.get("path"),
                "docset": doc.get("docset"),
                "vector": [round(float(x), 6) for x in vector],
            }) + "\n")

    meta = {
        "count": len(docs),
        "dimensions": dims,
        "max_features": args.max_features,
        "explained_variance": float(np.sum(svd.explained_variance_ratio_)),
    }
    with open(args.meta, "w", encoding="utf-8") as handle:
        json.dump(meta, handle, indent=2)


if __name__ == "__main__":
    main()
