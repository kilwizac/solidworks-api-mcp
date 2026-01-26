---
type: method
interface: IModelDoc2
member: GetUserUnit
returns: System.Object
parameters:
  -
    name: UnitType
    type: System.Int32
    description: Document unit type as defined in swUserUnitsType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetAngularUnits
  - IModelDoc2.GetUnits
  - IModelDoc2.IGetAngularUnits
  - IModelDoc2.IGetUnits
  - IModelDoc2.IGetUserUnit
  - IModelDoc2.ISetAngularUnits
  - IModelDoc2.SetAngularUnits
  - IModelDoc2.SetUnits
  - ISldWorks.GetUserUnit
keywords:
  - units
  - getuserunit
  - imodeldoc2
  - model
  - doc2
  - user
  - unit
  - type
  - int32
  - object
  - document
  - vba
  - vb
  - net
---

# IModelDoc2.GetUserUnit

Gets this document's units settings.

## Signature

```csharp
System.Object GetUserUnit( 
   System.Int32
UnitType
)
```
## Parameters

- `UnitType` (System.Int32): Document unit type as defined in swUserUnitsType_e

## Return Value

IUserUnit

## Remarks

The properties of IUserUnit are read only. Set them using the IModelDocExtension::SetUserPreference* methods.

## Examples

- Get and Set Document Units (VBA) (Get_and_Set_User_Units_Example_VB.htm)
- Get and Set Document Units (VB.NET) (Get_and_Set_User_Units_Example_VBNET.htm)
- Get and Set Document Units (C#) (Get_and_Set_User_Units_Example_CSharp.htm)

## See Also

- `IModelDoc2.GetAngularUnits`
- `IModelDoc2.GetUnits`
- `IModelDoc2.IGetAngularUnits`
- `IModelDoc2.IGetUnits`
- `IModelDoc2.IGetUserUnit`
- `IModelDoc2.ISetAngularUnits`
- `IModelDoc2.SetAngularUnits`
- `IModelDoc2.SetUnits`
- `ISldWorks.GetUserUnit`