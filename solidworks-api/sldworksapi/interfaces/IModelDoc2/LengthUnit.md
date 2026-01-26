---
type: property
interface: IModelDoc2
member: LengthUnit
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetAngularUnits
  - IModelDoc2.GetUserUnit
  - IModelDoc2.IGetAngularUnits
  - IModelDoc2.IGetUserUnit
  - IModelDoc2.ISetAngularUnits
  - IModelDoc2.SetAngularUnits
keywords:
  - units
  - lengthunit
  - imodeldoc2
  - model
  - doc2
  - length
  - unit
  - int32
readonly: null
---

# IModelDoc2.LengthUnit

Gets and sets the same LengthUnit value used by IModelDoc2::GetUnits, IModelDoc2::IGetUnits, and IModelDoc2::SetUnits.

## Signature

```csharp
System.Int32 LengthUnit {get; set;}
```
## Parameters

None.

## Return Value

Unit as defined in swLengthUnit_e

## See Also

- `IModelDoc2.GetAngularUnits`
- `IModelDoc2.GetUserUnit`
- `IModelDoc2.IGetAngularUnits`
- `IModelDoc2.IGetUserUnit`
- `IModelDoc2.ISetAngularUnits`
- `IModelDoc2.SetAngularUnits`