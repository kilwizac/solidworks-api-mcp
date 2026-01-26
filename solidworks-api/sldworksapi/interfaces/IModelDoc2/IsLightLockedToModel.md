---
type: method
interface: IModelDoc2
member: IsLightLockedToModel
returns: System.Boolean
parameters:
  -
    name: LightId
    type: System.Int32
    description: Light ID
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetLightSourceIdFromName
  - IModelDoc2.LockLightToModel
keywords:
  - lighting
  - locked
  - islightlockedtomodel
  - imodeldoc2
  - model
  - doc2
  - light
  - id
  - int32
  - boolean
---

# IModelDoc2.IsLightLockedToModel

Gets whether the specified light is fixed.

## Signature

```csharp
System.Boolean IsLightLockedToModel( 
   System.Int32
LightId
)
```
## Parameters

- `LightId` (System.Int32): Light ID

## Return Value

True if the light is fixed, false otherwise

## See Also

- `IModelDoc2.GetLightSourceIdFromName`
- `IModelDoc2.LockLightToModel`