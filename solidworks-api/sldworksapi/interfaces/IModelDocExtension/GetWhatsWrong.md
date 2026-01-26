---
type: method
interface: IModelDocExtension
member: GetWhatsWrong
returns: System.Boolean
parameters:
  -
    name: Features
    type: System.Object
    description: Array of features in the What's Wrong dialog
  -
    name: ErrorCodes
    type: System.Object
    description: Array of error codes corresponding to the features in the What's Wrong dialog as defined in swFeatureError_e
  -
    name: Warnings
    type: System.Object
    description: Array of Booleans corresponding to the features in the What's Wrong dialog indicating whether SOLIDWORKS detected a What's Wrong item as a warning; true if SOLIDWORKS detected a What's Wrong item as a warning, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IFeature.GetErrorCode2
  - IMacroFeatureData.Provider
  - IModelDocExtension.GetWhatsWrongCount
keywords:
  - what
  - wrong
  - getwhatswrong
  - imodeldocextension
  - model
  - doc
  - extension
  - whats
  - features
  - object
  - error
  - codes
  - warnings
  - boolean
  - vb
  - net
  - vba
---

# IModelDocExtension.GetWhatsWrong

Gets the What's Wrong dialog information for this model document.

## Signature

```csharp
System.Boolean GetWhatsWrong( 
   out System.Object
Features
,
   out System.Object
ErrorCodes
,
   out System.Object
Warnings
)
```
## Parameters

- `Features` (System.Object): Array of features in the What's Wrong dialog
- `ErrorCodes` (System.Object): Array of error codes corresponding to the features in the What's Wrong dialog as defined in swFeatureError_e
- `Warnings` (System.Object): Array of Booleans corresponding to the features in the What's Wrong dialog indicating whether SOLIDWORKS detected a What's Wrong item as a warning; true if SOLIDWORKS detected a What's Wrong item as a warning, false if not

## Return Value

True if this method runs successfully, false if not

## Examples

- Get What's Wrong (C#) (Get_What's_Wrong_Example_CSharp.htm)
- Get What's Wrong (VB.NET) (Get_What's_Wrong_Example_VBNET.htm)
- Get What's Wrong (VBA) (Get_What's_Wrong_Example_VB.htm)

## See Also

- `IFeature.GetErrorCode2`
- `IMacroFeatureData.Provider`
- `IModelDocExtension.GetWhatsWrongCount`