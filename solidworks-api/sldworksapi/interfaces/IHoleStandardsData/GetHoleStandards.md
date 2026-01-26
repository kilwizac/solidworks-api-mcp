---
type: method
interface: IHoleStandardsData
member: GetHoleStandards
returns: System.Boolean
parameters:
  -
    name: Indexes
    type: System.Object
    description: Array of Hole Wizard standards as defined in swWzdHoleStandards_e
  -
    name: Names
    type: System.Object
    description: Array of names of Hole Wizard standards
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IHoleStandardsData.GetFastenerTable
  - IHoleStandardsData.GetFastenerTableTypes
  - IHoleStandardsData.GetFastenerTypes
keywords:
  - getholestandards
  - iholestandardsdata
  - hole
  - standards
  - data
  - indexes
  - object
  - names
  - boolean
---

# IHoleStandardsData.GetHoleStandards

Gets Hole Wizard standards.

## Signature

```csharp
System.Boolean GetHoleStandards( 
   out System.Object
Indexes
,
   out System.Object
Names
)
```
## Parameters

- `Indexes` (System.Object): Array of Hole Wizard standards as defined in swWzdHoleStandards_e
- `Names` (System.Object): Array of names of Hole Wizard standards

## Return Value

True if Hole Wizard standards retrieved successfully, false if not

## Examples

- IHoleStandardsData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IHoleStandardsData)

## See Also

- `IHoleStandardsData.GetFastenerTable`
- `IHoleStandardsData.GetFastenerTableTypes`
- `IHoleStandardsData.GetFastenerTypes`