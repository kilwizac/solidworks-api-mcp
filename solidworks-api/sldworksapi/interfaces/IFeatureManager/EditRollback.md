---
type: method
interface: IFeatureManager
member: EditRollback
returns: System.Boolean
parameters:
  -
    name: Location
    type: System.Int32
    description: Location to which to move the rollback bar as defined in swMoveRollbackBarTo_e
  -
    name: Feature
    type: System.String
    description: Name of the feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.IsRolledBack
keywords:
  - rollback
  - bar
  - editrollback
  - ifeaturemanager
  - feature
  - manager
  - edit
  - location
  - int32
  - string
  - boolean
  - roll
  - back
  - model
  - vb
  - net
  - vba
---

# IFeatureManager.EditRollback

Rolls back or forward the rollback bar to a specific location in the FeatureManager design tree.

## Signature

```csharp
System.Boolean EditRollback( 
   System.Int32
Location
,
   System.String
Feature
)
```
## Parameters

- `Location` (System.Int32): Location to which to move the rollback bar as defined in swMoveRollbackBarTo_e
- `Feature` (System.String): Name of the feature

## Return Value

True if moving the rollback bar back or forward was successful, false if not

## Remarks

When the model is in a rollback state, it reverts to an earlier state, suppressing recently added features. You can add new features or edit existing features while the model is in the rolled-back state.

## Examples

- Roll Back Model (C#) (Roll_Back_Model_Example_CSharp.htm)
- Roll Back Model (VB.NET) (Roll_Back_Model_Example_VBNET.htm)
- Roll Back Model (VBA) (Roll_Back_Model_Example_VB.htm)

## See Also

- `IFeature.IsRolledBack`