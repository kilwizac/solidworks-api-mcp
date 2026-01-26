---
type: method
interface: IDrawingDoc
member: InsertChainDim
returns: void
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - drawings
  - ui
related: []
keywords:
  - insertchaindim
  - idrawingdoc
  - drawing
  - doc
  - insert
  - chain
  - dim
  - void
---

# IDrawingDoc.InsertChainDim

Obsolete. Superseded by IModelDocExtension::InsertChainDimensions.

## Signature

```csharp
void InsertChainDim()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

To insert a chain dimension into a drawing:
Call this method.
Call
IModelDocExtension::SelectByID2
to select the first entity. This entity is used to create all dimensions in the chain.
Call IModelDocExtension::SelectByID2 to select the second entity to dimension with respect to the first.
Call
IModelDoc2::AddDimension2
.
Call IModelDocExtension::SelectByID2 to select the next entity to dimension with respect to the first.
Call IModelDoc2::AddDimension2 to add the dimension to the chain.
Repeat steps 5 and 6 to add more dimensions to the chain.