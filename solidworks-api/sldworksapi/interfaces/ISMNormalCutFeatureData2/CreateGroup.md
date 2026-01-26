---
type: method
interface: ISMNormalCutFeatureData2
member: CreateGroup
returns: System.Object
parameters:
  -
    name: ErrCode
    type: System.Int32
    description: Error code as defined in swNormalCutErrors_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - creategroup
  - ismnormalcutfeaturedata2
  - ism
  - normal
  - cut
  - feature
  - data2
  - create
  - group
  - err
  - code
  - int32
  - object
---

# ISMNormalCutFeatureData2.CreateGroup

Creates a group of connected faces to cut.

## Signature

```csharp
System.Object CreateGroup( 
   out System.Int32
ErrCode
)
```
## Parameters

- `ErrCode` (System.Int32): Error code as defined in swNormalCutErrors_e

## Return Value

ISMNormalCutGroupData

## Examples

- ISMNormalCutFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMNormalCutFeatureData2)