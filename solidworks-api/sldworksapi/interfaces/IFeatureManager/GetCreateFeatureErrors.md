---
type: method
interface: IFeatureManager
member: GetCreateFeatureErrors
returns: System.Int32
parameters:
  -
    name: Msgs
    type: System.Object
    description: Array of errors as defined by swCreateFeatureError_e
  -
    name: FeatureTypeName
    type: System.String
    description: Feature type name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getcreatefeatureerrors
  - ifeaturemanager
  - feature
  - manager
  - create
  - errors
  - msgs
  - object
  - type
  - name
  - string
  - int32
---

# IFeatureManager.GetCreateFeatureErrors

Gets the errors that occurred during the last call to IFeatureManager::CreateFeature.

## Signature

```csharp
System.Int32 GetCreateFeatureErrors( 
   out System.Object
Msgs
,
   out System.String
FeatureTypeName
)
```
## Parameters

- `Msgs` (System.Object): Array of errors as defined by swCreateFeatureError_e
- `FeatureTypeName` (System.String): Feature type name

## Return Value

0 <= Number of messages issued at the time of last call to IFeatureManager::CreateFeature <= 20

## Remarks

This method is valid only after attempting to create
Mate Controller
features using IFeatureManager::CreateFeature.