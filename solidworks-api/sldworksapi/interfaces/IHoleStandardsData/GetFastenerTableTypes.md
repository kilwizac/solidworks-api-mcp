---
type: method
interface: IHoleStandardsData
member: GetFastenerTableTypes
returns: System.Boolean
parameters:
  -
    name: StandardName
    type: System.String
    description: Standard name (see Remarks )
  -
    name: FastenerID
    type: System.Int32
    description: Fastener ID (see Remarks )
  -
    name: FastenerTableTypeIDs
    type: System.Object
    description: Array of three fastener table type IDs (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getfastenertabletypes
  - iholestandardsdata
  - hole
  - standards
  - data
  - fastener
  - table
  - types
  - standard
  - name
  - string
  - id
  - int32
  - type
  - ds
  - object
  - boolean
---

# IHoleStandardsData.GetFastenerTableTypes

Gets the array of three fastener table type IDs for the given fastener in the given Hole Wizard standard.

## Signature

```csharp
System.Boolean GetFastenerTableTypes( 
   System.String
StandardName
,
   System.Int32
FastenerID
,
   out System.Object
FastenerTableTypeIDs
)
```
## Parameters

- `StandardName` (System.String): Standard name (see Remarks )
- `FastenerID` (System.Int32): Fastener ID (see Remarks )
- `FastenerTableTypeIDs` (System.Object): Array of three fastener table type IDs (see Remarks )

## Return Value

True if the fastener table type IDs are successfully retrieved, false if not

## Remarks

Each fastener in a given standard has three tables associated with it: size, thread data, and screw clearances. This method retrieves internal IDs of all three table types as defined in
swFastenerTableTypes_e
for FastenerID in StandardName.
To set:
StandardName, use
IHoleStandardsData::GetHoleStandards
.
FastenerID, use
IHoleStandardsData::GetFastenerTypes
.

## Examples

- IHoleStandardsData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHoleStandardsData)