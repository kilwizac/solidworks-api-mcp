---
type: method
interface: IModelDoc2
member: LockLightToModel
returns: System.Boolean
parameters:
  -
    name: LightId
    type: System.Int32
    description: Light ID
  -
    name: Fix
    type: System.Boolean
    description: True if the light is locked, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetLightSourceIdFromName
  - IModelDoc2.IsLightLockedToModel
keywords:
  - lighting
  - locked
  - lock
  - light
  - locklighttomodel
  - imodeldoc2
  - model
  - doc2
  - id
  - int32
  - fix
  - boolean
  - add
  - spotlight
  - feature
  - vb
  - net
  - vba
---

# IModelDoc2.LockLightToModel

Locks or unlocks the specified light.

## Signature

```csharp
System.Boolean LockLightToModel( 
   System.Int32
LightId
,
   System.Boolean
Fix
)
```
## Parameters

- `LightId` (System.Int32): Light ID
- `Fix` (System.Boolean): True if the light is locked, false if not

## Return Value

True if change is successful, false if not

## Examples

- Add Spotlight and Get Light Feature (C#) (Add_Spotlight_and_Get_Light_Feature_Example_CSharp.htm)
- Add Spotlight and Get Light Feature (VB.NET) (Add_Spotlight_and_Get_Light_Feature_Example_VBNET.htm)
- Add Spotlight and Get Light Feature (VBA) (Add_Spotlight_and_Get_Light_Feature_Example_VB.htm)

## See Also

- `IModelDoc2.GetLightSourceIdFromName`
- `IModelDoc2.IsLightLockedToModel`