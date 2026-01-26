---
type: method
interface: ISldWorks
member: GetDocumentVisible
returns: System.Boolean
parameters:
  -
    name: Type
    type: System.Int32
    description: Document type as defined by swDocumentTypes_e
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
  - visibility
  - getdocumentvisible
  - isldworks
  - sld
  - works
  - visible
  - type
  - int32
  - boolean
---

# ISldWorks.GetDocumentVisible

Gets the visibility of the document to open.

## Signature

```csharp
System.Boolean GetDocumentVisible( 
   System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Document type as defined by swDocumentTypes_e

## Return Value

True if the document will be visible when opened, false if not