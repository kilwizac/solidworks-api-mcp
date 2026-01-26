---
type: method
interface: ICornerMember
member: GetUnderlyingMemberFeature
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getunderlyingmemberfeature
  - icornermember
  - corner
  - member
  - underlying
  - feature
  - object
  - icornermanagementfolder
---

# ICornerMember.GetUnderlyingMemberFeature

Gets the feature for this corner member.

## Signature

```csharp
System.Object GetUnderlyingMemberFeature()
```
## Parameters

None.

## Return Value

IFeature

## Remarks

After calling this method to get the IFeature, use
IFeature::GetSpecificFeature2
to get an
ISructureSystemMemberFeatureData
.

## Examples

- ICornerManagementFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICornerManagementFolder)