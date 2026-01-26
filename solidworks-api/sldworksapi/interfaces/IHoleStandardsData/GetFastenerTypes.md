---
type: method
interface: IHoleStandardsData
member: GetFastenerTypes
returns: System.Boolean
parameters:
  -
    name: StandardName
    type: System.String
    description: Standard name (see Remarks )
  -
    name: FastenerIndexes
    type: System.Object
    description: Array of fastener indexes
  -
    name: FastenerNames
    type: System.Object
    description: Array of fastener names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getfastenertypes
  - iholestandardsdata
  - hole
  - standards
  - data
  - fastener
  - types
  - standard
  - name
  - string
  - indexes
  - object
  - names
  - boolean
---

# IHoleStandardsData.GetFastenerTypes

Gets the fasteners in the specified Hole Wizard standard.

## Signature

```csharp
System.Boolean GetFastenerTypes( 
   System.String
StandardName
,
   out System.Object
FastenerIndexes
,
   out System.Object
FastenerNames
)
```
## Parameters

- `StandardName` (System.String): Standard name (see Remarks )
- `FastenerIndexes` (System.Object): Array of fastener indexes
- `FastenerNames` (System.Object): Array of fastener names

## Return Value

True if fastener types successfully retrieved, false if not

## Remarks

To set StandardName, use
IHoleStandardsData::GetHoleStandards
.

## Examples

- IHoleStandardsData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHoleStandardsData)