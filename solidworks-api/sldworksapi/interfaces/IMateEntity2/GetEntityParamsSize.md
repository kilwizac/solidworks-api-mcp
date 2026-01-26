---
type: method
interface: IMateEntity2
member: GetEntityParamsSize
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMateEntity2.EntityParams
keywords:
  - getentityparamssize
  - imateentity2
  - mate
  - entity2
  - entity
  - params
  - size
  - int32
---

# IMateEntity2.GetEntityParamsSize

Gets the number of parameters for this mate entity.

## Signature

```csharp
System.Int32 GetEntityParamsSize()
```
## Parameters

None.

## Return Value

Number of parameters for this mate entity

## Remarks

Call this method before calling
IMateEntity2::IGetEntityParams
to determine the size of the array for that method.

## See Also

- `IMateEntity2.EntityParams`