---
type: method
interface: IComponent2
member: GetRenderMaterialsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetRenderMaterials
keywords:
  - getrendermaterialscount
  - icomponent2
  - component2
  - render
  - materials
  - count
  - int32
---

# IComponent2.GetRenderMaterialsCount

Obsolete. Superseded by IComponent2::GetRenderMaterialsCount2.

## Signature

```csharp
System.Int32 GetRenderMaterialsCount()
```
## Parameters

None.

## Return Value

Number of appearances

## Remarks

Call this method before calling
IComponent::IGetRenderMaterials
to get the size of the array for that method.

## See Also

- `IComponent2.GetRenderMaterials`