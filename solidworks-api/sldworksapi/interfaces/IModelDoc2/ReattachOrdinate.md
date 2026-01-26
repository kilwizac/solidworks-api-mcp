---
type: method
interface: IModelDoc2
member: ReattachOrdinate
returns: System.Boolean
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
  - IModelDoc2.EditOrdinate
  - IModelDocExtension.AddOrdinateDimension
keywords:
  - dimension
  - see
  - also
  - idimension
  - ordinate
  - dimensions
  - reattachordinate
  - imodeldoc2
  - model
  - doc2
  - reattach
  - boolean
---

# IModelDoc2.ReattachOrdinate

Reattaches an ordinate dimension to a different entity.

## Signature

```csharp
System.Boolean ReattachOrdinate()
```
## Parameters

None.

## Return Value

True if the re-attachment is successful, false if not

## Remarks

To use this method, you must first select the dimension to reattach and then call to
IModelDocExtension::SelectByID2
must be made that selects the new entity to which this dimension will be attached.

## See Also

- `IModelDoc2.AlignOrdinate`
- `IModelDoc2.EditOrdinate`
- `IModelDocExtension.AddOrdinateDimension`