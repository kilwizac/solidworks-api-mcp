---
type: method
interface: IModelDoc2
member: SetTitle2
returns: System.Boolean
parameters:
  -
    name: NewTitle
    type: System.String
    description: Name to give to the document window
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - document
  - title
  - settitle2
  - imodeldoc2
  - model
  - doc2
  - title2
  - new
  - string
  - boolean
---

# IModelDoc2.SetTitle2

Sets the title of a new document.

## Signature

```csharp
System.Boolean SetTitle2( 
   System.String
NewTitle
)
```
## Parameters

- `NewTitle` (System.String): Name to give to the document window

## Return Value

True if successfully renamed, false otherwise

## Remarks

This title appears in the active window's title bar.
This method:
Does not save this model document to disk; instead, it renames the document window.
Is only valid when for a new document that has not yet been saved.
Does not change the title of a document that has already been saved and exists on disk. If you want to rename an existing document, use ModelDoc2::SaveAs.
To retrieve the title of a document, use
IModelDoc2::GetTitle
.