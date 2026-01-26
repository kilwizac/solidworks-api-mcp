---
type: method
interface: IComponent2
member: GetDecalsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetDecals
keywords:
  - getdecalscount
  - icomponent2
  - component2
  - decals
  - count
  - int32
---

# IComponent2.GetDecalsCount

Gets the number of decals applied to this component.

## Signature

```csharp
System.Int32 GetDecalsCount()
```
## Parameters

None.

## Return Value

Number of decals

## Remarks

Call this method before calling
IComponent2::IGetDecals
to get the size of the array for that method.

## See Also

- `IComponent2.GetDecals`