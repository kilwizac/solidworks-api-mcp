---
type: method
interface: IHoleStandardsData
member: GetFastenerTable
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
    name: TableID
    type: System.Int32
    description: Fastener table type ID (see Remarks )
  -
    name: HoleTable
    type: System.Object
    description: IHoleDataTable
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getfastenertable
  - iholestandardsdata
  - hole
  - standards
  - data
  - fastener
  - table
  - standard
  - name
  - string
  - id
  - int32
  - object
  - boolean
---

# IHoleStandardsData.GetFastenerTable

Gets the Hole Wizard fastener table for the specified Hole Wizard standard, fastener ID, and fastener table type ID.

## Signature

```csharp
System.Boolean GetFastenerTable( 
   System.String
StandardName
,
   System.Int32
FastenerID
,
   System.Int32
TableID
,
   out System.Object
HoleTable
)
```
## Parameters

- `StandardName` (System.String): Standard name (see Remarks )
- `FastenerID` (System.Int32): Fastener ID (see Remarks )
- `TableID` (System.Int32): Fastener table type ID (see Remarks )
- `HoleTable` (System.Object): IHoleDataTable

## Return Value

True if fastener data table successfully retrieved, false if not

## Remarks

To set:
StandardName, use
IHoleStandardsData::GetHoleStandards
.
FastenerID, use
IHoleStandardsData::GetFastenerTypes
.
TableID, use
IHoleStandardsData::GetFastenerTableTypes
.

## Examples

- IHoleStandardsData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHoleStandardsData)