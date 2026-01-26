---
type: property
interface: IDocumentSpecification
member: Query
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - query
  - idocumentspecification
  - document
  - specification
  - boolean
readonly: null
---

# IDocumentSpecification.Query

Gets or sets whether the options passed during a document's open, load, and save can be retrieved by this API.

## Signature

```csharp
System.Boolean Query {get; set;}
```
## Parameters

None.

## Return Value

True to retrieve options, false to not (default)

## Remarks

Various options can be passed to document operation APIs such as
IModelDoc2::Save3
,
IModelDocExtension::SaveAs4
, and
ISldWorks::LoadFile4
. These options can be retrieved from the document, if Query is set to true. Only silent information can be retrieved.