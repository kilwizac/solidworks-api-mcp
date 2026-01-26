---
type: method
interface: IModelDoc2
member: EditOrdinate
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.AlignOrdinate
  - IModelDoc2.ReattachOrdinate
  - IModelDocExtension.AddOrdinateDimension
keywords:
  - editordinate
  - imodeldoc2
  - model
  - doc2
  - edit
  - ordinate
  - void
---

# IModelDoc2.EditOrdinate

Puts the currently selected ordinate dimension into edit mode so you could add more ordinate dimensions to this group.

## Signature

```csharp
void EditOrdinate()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

You must pre-select the existing ordinate dimension and the entities to which to dimension. The position of the text and type of ordinate is determined by the existing ordinate dimension.

## See Also

- `IModelDoc2.AlignOrdinate`
- `IModelDoc2.ReattachOrdinate`
- `IModelDocExtension.AddOrdinateDimension`