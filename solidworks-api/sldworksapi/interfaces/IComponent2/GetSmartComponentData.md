---
type: method
interface: IComponent2
member: GetSmartComponentData
returns: System.Boolean
parameters:
  -
    name: Features
    type: System.Object
    description: Array of IFeature s that can be selected for this Smart Component (see Remarks )
  -
    name: FeaturesSelected
    type: System.Object
    description: Array of boolean values; true if the corresponding item in the Features array is selected, false if it is not selected
  -
    name: Components
    type: System.Object
    description: Array of IComponent2 s that can be selected for this Smart Component (see Remarks )
  -
    name: ComponentsSelected
    type: System.Object
    description: Array of boolean values; true if the corresponding item in the Components array is selected, false if it is not selected
  -
    name: References
    type: System.Object
    description: Array of feature reference entities that are used to activate the Smart Features specified by Features and FeaturesSelected; empty if the Smart Component features have not been activated (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.AddSmartComponent
  - IAssemblyDoc.CreateSmartComponent
keywords:
  - components
  - see
  - also
  - icomponent2
  - smart
  - getsmartcomponentdata
  - component2
  - component
  - data
  - features
  - object
  - selected
  - references
  - boolean
  - activate
  - assembly
  - vba
  - vb
  - net
---

# IComponent2.GetSmartComponentData

Gets the features, components, and feature references of a Smart Component.

## Signature

```csharp
System.Boolean GetSmartComponentData( 
   out System.Object
Features
,
   out System.Object
FeaturesSelected
,
   out System.Object
Components
,
   out System.Object
ComponentsSelected
,
   out System.Object
References
)
```
## Parameters

- `Features` (System.Object): Array of IFeature s that can be selected for this Smart Component (see Remarks )
- `FeaturesSelected` (System.Object): Array of boolean values; true if the corresponding item in the Features array is selected, false if it is not selected
- `Components` (System.Object): Array of IComponent2 s that can be selected for this Smart Component (see Remarks )
- `ComponentsSelected` (System.Object): Array of boolean values; true if the corresponding item in the Components array is selected, false if it is not selected
- `References` (System.Object): Array of feature reference entities that are used to activate the Smart Features specified by Features and FeaturesSelected; empty if the Smart Component features have not been activated (see Remarks )

## Return Value

True if successful, false if not

## Remarks

A Smart Component is defined by:
Components
Features
Feature references
See the SOLIDWORKS Help for more information about Smart Components.
Use this method to get the current features, components, and feature references of a Smart Component.
Before calling this method:
Open an assembly that contains a Smart Component whose Smart Features are not activated.
Find the Smart Component in the assembly using
IComponent2::IsSmartComponent
.
After calling this method, use
IComponent2::SetSmartComponentData
to change which features and components of a Smart Component to enable and which Smart Features to activate.
Use
ISmartComponentFeatureData
to:
Insert new features and components into a Smart Component.
Delete features and components from a Smart Component.

## Examples

- Activate Smart Features in an Assembly (VBA) (Activate_Smart_Features_in_an_Assembly_Example_VB.htm)
- Activate Smart Features in an Assembly (VB.NET) (Activate_Smart_Features_in_an_Assembly_Example_VBNET.htm)
- Activate Smart Features in an Assembly (C#) (Activate_Smart_Features_in_an_Assembly_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.AddSmartComponent`
- `IAssemblyDoc.CreateSmartComponent`