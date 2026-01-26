---
type: method
interface: IWizardHoleFeatureData2
member: ChangeStandard
returns: System.Boolean
parameters:
  -
    name: Standard
    type: System.Int32
    description: Standard as defined in swWzdHoleStandards_e
  -
    name: FastenerType
    type: System.Int32
    description: Fastener type as defined in swWzdHoleStandardFastenerTypes_e
  -
    name: SSize
    type: System.String
    description: Fastener size
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
  - standards
  - changestandard
  - wizard
  - hole
  - feature
  - data2
  - change
  - standard
  - int32
  - fastener
  - type
  - size
  - string
  - boolean
---

# IWizardHoleFeatureData2.ChangeStandard

Sets the standard for all of the parameters of the Hole Wizard feature that are driven by the database.

## Signature

```csharp
System.Boolean ChangeStandard( 
   System.Int32
Standard
,
   System.Int32
FastenerType
,
   System.String
SSize
)
```
## Parameters

- `Standard` (System.Int32): Standard as defined in swWzdHoleStandards_e
- `FastenerType` (System.Int32): Fastener type as defined in swWzdHoleStandardFastenerTypes_e
- `SSize` (System.String): Fastener size

## Return Value

True if the standard is changed, false if not

## Remarks

Use this method to change
fastener size
,
fastener type
, and
design standard
of a Hole Wizard feature.
If changing the standard requires you to change the type, then you must call
IWizardHoleFeatureData2::Type
before calling IWizardHoleFeatureData2::ChangeStandard.