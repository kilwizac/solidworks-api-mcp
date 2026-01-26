---
type: method
interface: IFeature
member: GetErrorCode2
returns: System.Int32
parameters:
  -
    name: IsWarning
    type: System.Boolean
    description: True if the error is a warning, false if not NOTE : This parameter should only be examined if the return value is non-zero.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IModelDoc2.ShowFeatureErrorDialog
  - IModelDocExtension.GetWhatsWrong
  - IModelDocExtension.GetWhatsWrongCount
  - ISldWorks.AllowFailedFeatureCreation
keywords:
  - feature
  - see
  - also
  - ifeature
  - errors
  - features
  - what
  - wrong
  - geterrorcode2
  - error
  - code2
  - warning
  - boolean
  - int32
  - codes
  - vba
---

# IFeature.GetErrorCode2

Gets the error code for this feature.

## Signature

```csharp
System.Int32 GetErrorCode2( 
   out System.Boolean
IsWarning
)
```
## Parameters

- `IsWarning` (System.Boolean): True if the error is a warning, false if not NOTE : This parameter should only be examined if the return value is non-zero.

## Return Value

Feature error code as defined in swFeatureError_e

## Remarks

This method returns many of the errors indicated by the What's Wrong icon seen with an invalid feature in the FeatureManager design tree.
During feature creation, you can prevent the error dialog from appearing by using
IModelDoc2::ShowFeatureErrorDialog
.

## Examples

- Get Error Codes for Features (VBA) (Get_Error_Codes_for_Features_Example_VB.htm)

## See Also

- `IModelDoc2.ShowFeatureErrorDialog`
- `IModelDocExtension.GetWhatsWrong`
- `IModelDocExtension.GetWhatsWrongCount`
- `ISldWorks.AllowFailedFeatureCreation`