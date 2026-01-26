---
type: property
interface: IClearanceVerificationMgr
member: IgnoreClearanceEqualToSpecifiedValue
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - ignoreclearanceequaltospecifiedvalue
  - iclearanceverificationmgr
  - clearance
  - verification
  - mgr
  - ignore
  - equal
  - specified
  - value
  - boolean
readonly: null
---

# IClearanceVerificationMgr.IgnoreClearanceEqualToSpecifiedValue

Gets or sets whether to ignore clearances equal to or greater than IClearanceVerificationMgr::GetMinimumAcceptableClearance.

## Signature

```csharp
System.Boolean IgnoreClearanceEqualToSpecifiedValue {get; set;}
```
## Parameters

None.

## Return Value

True to ignore clearances equal to or greater than the specified value, false to not

## Remarks

If this property is true, use
IClearanceVerificationMgr::SetMinimumAcceptableClearance
to specify the minimum clearance value, at or above which clearances are ignored.

## Examples

- IClearanceVerificationMgr (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IClearanceVerificationMgr)