---
type: method
interface: ISldWorks
member: GetUserUnit
returns: System.Object
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
  - IModelDoc2.IGetUserUnit
  - ISldWorks.IGetUserUnit
keywords:
  - units
  - getuserunit
  - isldworks
  - sld
  - works
  - user
  - unit
  - type
  - int32
  - object
---

# ISldWorks.GetUserUnit

Gets an empty IUserUnit object of the specified type.

## Signature

```csharp
System.Object GetUserUnit( 
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
IModelDoc2::GetUserUnit
to get the user units of a document.

## See Also

- `IModelDoc2.IGetUserUnit`
- `ISldWorks.IGetUserUnit`