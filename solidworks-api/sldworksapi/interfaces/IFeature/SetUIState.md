---
type: method
interface: IFeature
member: SetUIState
returns: void
parameters:
  -
    name: StateType
    type: System.Int32
    description: User interface state type as defined in swUIStates_e
  -
    name: Flag
    type: System.Boolean
    description: True to set the user-interface state, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetUIState
  - IFeature.Visible
keywords:
  - hidden
  - feature
  - hide
  - features
  - show
  - setuistate
  - ifeature
  - ui
  - state
  - type
  - int32
  - flag
  - boolean
  - void
  - display
  - item
  - featuremanager
  - design
  - tree
  - vba
---

# IFeature.SetUIState

Sets the user-interface state of the current feature.

## Signature

```csharp
void SetUIState( 
   System.Int32
StateType
,
   System.Boolean
Flag
)
```
## Parameters

- `StateType` (System.Int32): User interface state type as defined in swUIStates_e
- `Flag` (System.Boolean): True to set the user-interface state, false to not

## Return Value

Unknown.

## Remarks

If you pass in StateType of swIsHiddenInFeatureMgr and flag of True, then this method hides the display of the feature in the FeatureManager design tree. To see your changes in the FeatureManager design tree , use
IModelDoc2::EditRebuild3
.
Features are initialized with all user-interface state type values set to false. However, in the case of attributes, you can use
IAttributeDef::CreateInstance5
to set the desired display state of the attribute at the time of creation.
A change in a the state setting of a feature causes all its dependents to inherit the same behavior, without actually setting the state type values of those dependents. Therefore, to get the actual user-interface state value of a feature, you can query its owner.
The user-interface state is not a property.

## Examples

- Display of Item in FeatureManager Design Tree (C++) (Display_of_Item_in_Feature_Manager_Example_CPlusPlus_COM.htm)
- Hide Feature in FeatureManager Design Tree (VBA) (Hide_Feature_in_FeatureManager_Design_Tree_Example_VB.htm)

## See Also

- `IFeature.GetUIState`
- `IFeature.Visible`