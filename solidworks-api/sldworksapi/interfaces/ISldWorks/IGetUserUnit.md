---
type: method
interface: ISldWorks
member: IGetUserUnit
returns: UserUnit
parameters:
  -
    name: UnitType
    type: System.Int32
    description: Unit type as defined in swUserUnitsType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetUserUnit
  - ISldWorks.GetUserUnit
keywords:
  - units
  - igetuserunit
  - isldworks
  - sld
  - works
  - user
  - unit
  - type
  - int32
---

# ISldWorks.IGetUserUnit

Gets an empty IUserUnit object of the specified type.

## Signature

```csharp
UserUnit IGetUserUnit( 
   System.Int32
UnitType
)
```
## Parameters

- `UnitType` (System.Int32): Unit type as defined in swUserUnitsType_e

## Return Value

IUserUnit

## Remarks

The instance of IUserUnit returned by this method is read-write, not persistent, and not tied to any document. Use this instance as a template to store units properties at runtime.
Call
IModelDoc2::IGetUserUnit
to get the user units of a document.

## See Also

- `IModelDoc2.GetUserUnit`
- `ISldWorks.GetUserUnit`