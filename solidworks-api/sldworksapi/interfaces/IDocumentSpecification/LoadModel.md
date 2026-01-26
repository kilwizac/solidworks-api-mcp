---
type: property
interface: IDocumentSpecification
member: LoadModel
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - loadmodel
  - idocumentspecification
  - document
  - specification
  - load
  - model
  - boolean
readonly: null
---

# IDocumentSpecification.LoadModel

Gets or sets whether to load the model if the document is a detached drawing.

## Signature

```csharp
System.Boolean LoadModel {get; set;}
```
## Parameters

None.

## Return Value

True to load the model, false to not

## Remarks

To avoid a warning when opening shaded modes in views, set this property to TRUE so that the view is automatically loaded in shaded.