---
type: method
interface: IRenderMaterial
member: GetEntitiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRenderMaterial.AddEntity
  - IRenderMaterial.GetEntities
  - IRenderMaterial.RemoveAllEntities
keywords:
  - getentitiescount
  - irendermaterial
  - render
  - material
  - entities
  - count
  - int32
---

# IRenderMaterial.GetEntitiesCount

Gets the number of entities on which this appearance was applied.

## Signature

```csharp
System.Int32 GetEntitiesCount()
```
## Parameters

None.

## Return Value

Number of entities on which this appearance was applied

## Remarks

Call this method before calling
IRenderMaterial::IGetEntities
to get the size of the array for that method.

## See Also

- `IRenderMaterial.AddEntity`
- `IRenderMaterial.GetEntities`
- `IRenderMaterial.RemoveAllEntities`