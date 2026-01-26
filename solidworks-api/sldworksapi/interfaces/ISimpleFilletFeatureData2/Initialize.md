---
type: method
interface: ISimpleFilletFeatureData2
member: Initialize
returns: System.Boolean
parameters:
  -
    name: FilletType
    type: System.Int32
    description: Simple fillet type as defined in swSimpleFilletType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - initialize
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - type
  - int32
  - boolean
  - ipartialedgefilletdata
---

# ISimpleFilletFeatureData2.Initialize

Initializes this simple fillet feature to the specified type.

## Signature

```csharp
System.Boolean Initialize( 
   System.Int32
FilletType
)
```
## Parameters

- `FilletType` (System.Int32): Simple fillet type as defined in swSimpleFilletType_e

## Return Value

True if the simple fillet feature is initialized, false if not

## Remarks

After you initialize this data object with a fillet type, you need to narrow the fillet type by specifying
ISimpleFilletFeatureData2::ConicTypeForCrossSectionProfile
.

## Examples

- IPartialEdgeFilletData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartialEdgeFilletData)
- ISimpleFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleFilletFeatureData2)