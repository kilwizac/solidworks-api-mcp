---
type: method
interface: IFeature
member: GetErrorCode
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - geterrorcode
  - ifeature
  - feature
  - error
  - code
  - int32
---

# IFeature.GetErrorCode

Obsolete. Superseded by IFeature::GetErrorCode2.

## Signature

```csharp
System.Int32 GetErrorCode()
```
## Parameters

None.

## Return Value

Feature error code as defined in swFeatureError_e

## Remarks

This method returns many of the errors indicated by the "What's Wrong" icon seen with an invalid feature in the FeatureManager design tree.
During feature creation, you can prevent the error dialog from appearing by using
IModelDoc2::ShowFeatureErrorDialog
.