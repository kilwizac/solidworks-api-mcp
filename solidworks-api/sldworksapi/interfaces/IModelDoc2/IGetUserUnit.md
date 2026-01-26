---
type: method
interface: IModelDoc2
member: IGetUserUnit
returns: UserUnit
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
  - IModelDoc2.GetUserUnit
  - IModelDoc2.IGetAngularUnits
  - IModelDoc2.IGetUnits
  - IModelDoc2.ISetAngularUnits
  - IModelDoc2.SetAngularUnits
  - IModelDoc2.SetUnits
  - ISldWorks.IGetUserUnit
keywords:
  - units
  - igetuserunit
  - imodeldoc2
  - model
  - doc2
  - user
  - unit
  - type
  - int32
---

# IModelDoc2.IGetUserUnit

Gets this document's units settings.

## Signature

```csharp
UserUnit IGetUserUnit( 
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

## See Also

- `IModelDoc2.GetAngularUnits`
- `IModelDoc2.GetUnits`
- `IModelDoc2.GetUserUnit`
- `IModelDoc2.IGetAngularUnits`
- `IModelDoc2.IGetUnits`
- `IModelDoc2.ISetAngularUnits`
- `IModelDoc2.SetAngularUnits`
- `IModelDoc2.SetUnits`
- `ISldWorks.IGetUserUnit`