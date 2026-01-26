---
type: method
interface: IFeature
member: GetUIState
returns: System.Boolean
parameters:
  -
    name: StateType
    type: System.Int32
    description: User interface state type as defined in swUIStates_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.SetUIState
  - IFeature.Visible
keywords:
  - hidden
  - feature
  - getuistate
  - ifeature
  - ui
  - state
  - type
  - int32
  - boolean
  - hide
  - featuremanager
  - design
  - tree
  - vba
  - display
  - item
---

# IFeature.GetUIState

Gets the user-interface state of the current feature.

## Signature

```csharp
System.Boolean GetUIState( 
   System.Int32
StateType
)
```
## Parameters

- `StateType` (System.Int32): User interface state type as defined in swUIStates_e

## Return Value

True if the state type is set, false if it is not

## Remarks

If you pass in the user-interface state type of swIsHiddenInFeatureMgr, this method returns True if the current feature is hidden in the FeatureManager design tree or false if the current feature is visible in the FeatureManager design tree.
The user-interface state is not a property.
To see your changes in the FeatureManager design tree, call
IModelDoc2::EditRebuild3
. Currently, the user-interface state data is runtime only.
Features are initialized with all user-interface state type values set to false.
A change in a feature state setting causes all the dependents of the feature to inherit the same behavior, without actually setting the state type values of those dependents. Therefore, to get the actual user-interface state value of a feature, you must check the owning feature.

## Examples

- Hide Feature in FeatureManager Design Tree (VBA) (Hide_Feature_in_FeatureManager_Design_Tree_Example_VB.htm)
- Display of Item in FeatureManager Design Tree (C++) (Display_of_Item_in_Feature_Manager_Example_CPlusPlus_COM.htm)

## See Also

- `IFeature.SetUIState`
- `IFeature.Visible`