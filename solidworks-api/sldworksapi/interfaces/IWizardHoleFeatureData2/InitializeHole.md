---
type: method
interface: IWizardHoleFeatureData2
member: InitializeHole
returns: void
parameters:
  -
    name: GenericHoleType
    type: System.Int32
    description: Hole type as defined in swWzdGeneralHoleTypes_e
  -
    name: StdIndex
    type: System.Int32
    description: Standard as defined in swWzdHoleStandards_e
  -
    name: FastnerType
    type: System.Int32
    description: Screw type as defined in swWzdHoleStandardFastenerTypes_e
  -
    name: SSize
    type: System.String
    description: Size of the hole
  -
    name: EndType
    type: System.Int32
    description: End type as defined in swEndConditions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - initialize
  - initializehole
  - wizard
  - hole
  - feature
  - data2
  - generic
  - type
  - int32
  - std
  - index
  - fastner
  - size
  - string
  - end
  - void
---

# IWizardHoleFeatureData2.InitializeHole

Initializes a newly created Hole Wizard feature data object.

## Signature

```csharp
void InitializeHole( 
   System.Int32
GenericHoleType
,
   System.Int32
StdIndex
,
   System.Int32
FastnerType
,
   System.String
SSize
,
   System.Int32
EndType
)
```
## Parameters

- `GenericHoleType` (System.Int32): Hole type as defined in swWzdGeneralHoleTypes_e
- `StdIndex` (System.Int32): Standard as defined in swWzdHoleStandards_e
- `FastnerType` (System.Int32): Screw type as defined in swWzdHoleStandardFastenerTypes_e
- `SSize` (System.String): Size of the hole
- `EndType` (System.Int32): End type as defined in swEndConditions_e

## Return Value

Unknown.