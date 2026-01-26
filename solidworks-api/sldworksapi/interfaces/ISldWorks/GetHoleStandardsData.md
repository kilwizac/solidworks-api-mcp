---
type: method
interface: ISldWorks
member: GetHoleStandardsData
returns: System.Object
parameters:
  -
    name: HoleTypeID
    type: System.Int32
    description: Hole Wizard hole type as defined in swWzdGeneralHoleTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IHoleDataTable
keywords:
  - getholestandardsdata
  - isldworks
  - sld
  - works
  - hole
  - standards
  - data
  - type
  - id
  - int32
  - object
  - vba
---

# ISldWorks.GetHoleStandardsData

Gets the hole standards for the specified hole type.

## Signature

```csharp
System.Object GetHoleStandardsData( 
   System.Int32
HoleTypeID
)
```
## Parameters

- `HoleTypeID` (System.Int32): Hole Wizard hole type as defined in swWzdGeneralHoleTypes_e

## Return Value

IHoleStandardsData ; null if HoleTypeID is 5 (swWzdLegacy)

## Examples

- Get Hole Standards Data (VBA) (Get_Wizard_Hole_Standards_Data_Example_VB.htm)
- Get Hole Standards Data (C#) (Get_Wizard_Hole_Standards_Data_Example_CSharp.htm)

## See Also

- `IHoleDataTable`