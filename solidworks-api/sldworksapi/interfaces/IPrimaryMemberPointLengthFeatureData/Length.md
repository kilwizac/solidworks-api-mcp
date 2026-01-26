---
type: property
interface: IPrimaryMemberPointLengthFeatureData
member: Length
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - length
  - iprimarymemberpointlengthfeaturedata
  - primary
  - member
  - point
  - feature
  - data
  - double
readonly: null
---

# IPrimaryMemberPointLengthFeatureData.Length

Gets and sets the length of this structure system member.

## Signature

```csharp
System.Double Length {get; set;}
```
## Parameters

None.

## Return Value

Length

## Remarks

This property is valid only if
IPrimaryMemberPointLengthFeatureData::EndCondition
is
swPrimaryMemberPointLengthEndCondition_e
.swPrimaryMemberPointLengthEndCondition_Length.

## Examples

- IPrimaryMemberPointLengthFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberPointLengthFeatureData)