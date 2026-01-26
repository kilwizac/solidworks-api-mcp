---
type: property
interface: IFeatureManager
member: FeatureName
returns: System.String
parameters:
  -
    name: NameID
    type: System.Int32
    description: Feature ID as defined in swFeatureNameID_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetTypeName
  - IFeature.Name
  - IFeatureManager.ShowFeatureName
keywords:
  - feature
  - see
  - also
  - ifeature
  - name
  - featurename
  - ifeaturemanager
  - manager
  - id
  - int32
  - string
readonly: true
---

# IFeatureManager.FeatureName

Gets the feature name for the specified feature ID.

## Signature

```csharp
System.String FeatureName( 
   System.Int32
NameID
) {get;}
```
## Parameters

- `NameID` (System.Int32): Feature ID as defined in swFeatureNameID_e

## Return Value

Feature name

## See Also

- `IFeature.GetTypeName`
- `IFeature.Name`
- `IFeatureManager.ShowFeatureName`