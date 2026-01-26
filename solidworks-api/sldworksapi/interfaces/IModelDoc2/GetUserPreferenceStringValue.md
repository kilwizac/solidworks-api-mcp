---
type: method
interface: IModelDoc2
member: GetUserPreferenceStringValue
returns: System.String
parameters:
  -
    name: UserPreference
    type: System.Int32
    description: Value as defined in swUserPreferenceStringValue_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - getuserpreferencestringvalue
  - imodeldoc2
  - model
  - doc2
  - user
  - preference
  - string
  - value
  - int32
  - transform
  - coordinate
  - vb
  - net
  - vba
  - save
  - rollbacked
  - part
  - parasolid
  - file
---

# IModelDoc2.GetUserPreferenceStringValue

Obsolete. Superseded by IModelDocExtension::GetUserPreferenceString.

## Signature

```csharp
System.String GetUserPreferenceStringValue( 
   System.Int32
UserPreference
)
```
## Parameters

- `UserPreference` (System.Int32): Value as defined in swUserPreferenceStringValue_e

## Return Value

String value of UserPreference

## Remarks

This method is equivalent to interactively getting document properties in the SOLIDWORKS Design software. See
System Options and Document Properties
for details.

## Examples

- Get Transform of Coordinate System (VB.NET) (Get_Transform_of_Coordinate_System_Example_VB.NET.htm)
- Get Coordinate System Transform (VBA) (Get_Coordinate_System_Transform_Example_VB.htm)
- Save Rollbacked Part as Parasolid File (VBA) (Save_Roll_Backed_Part_as_Parasolid_File_Example_VB.htm)