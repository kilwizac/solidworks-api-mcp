---
type: method
interface: ISldWorks
member: AllowFailedFeatureCreation
returns: System.Boolean
parameters:
  -
    name: YesNo
    type: System.Boolean
    description: True if features are to be created regardless of rebuild errors, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related: []
keywords:
  - feature
  - see
  - also
  - ifeature
  - rebuild
  - errors
  - features
  - allowfailedfeaturecreation
  - isldworks
  - sld
  - works
  - allow
  - failed
  - creation
  - yes
  - no
  - boolean
  - create
  - invalid
  - geometry
  - vba
---

# ISldWorks.AllowFailedFeatureCreation

Sets whether to allow the creation of a feature that has rebuild errors.

## Signature

```csharp
System.Boolean AllowFailedFeatureCreation( 
   System.Boolean
YesNo
)
```
## Parameters

- `YesNo` (System.Boolean): True if features are to be created regardless of rebuild errors, false if not

## Return Value

The previous value, which is now replaced by the value for YesNo

## Remarks

By default, features are not created when invalid geometry is specified; however, after calling this method with YesNo set to True, the features are created but with rebuild errors.

## Examples

- Create Feature With Invalid Geometry (VBA) (Create_Feature_with_Invalid_Geometry_Example_VB.htm)