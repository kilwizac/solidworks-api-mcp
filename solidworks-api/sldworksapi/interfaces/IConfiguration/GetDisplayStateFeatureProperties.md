---
type: method
interface: IConfiguration
member: GetDisplayStateFeatureProperties
returns: System.Object
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Name of the display state
  -
    name: Features
    type: System.Object
    description: Array of IFeature objects
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - IConfiguration.GetDisplayStateBodyProperties
  - IConfiguration.GetDisplayStateComponentProperties
  - IConfiguration.GetDisplayStateComponentVisibility
  - IConfiguration.GetDisplayStateFaceProperties
  - IConfiguration.GetDisplayStateProperties
  - IConfiguration.GetDisplayStates
  - IConfiguration.GetDisplayStatesCount
keywords:
  - display
  - states
  - getdisplaystatefeatureproperties
  - iconfiguration
  - configuration
  - state
  - feature
  - properties
  - name
  - string
  - features
  - object
---

# IConfiguration.GetDisplayStateFeatureProperties

Gets the features and their material properties in the specified display state.

## Signature

```csharp
System.Object GetDisplayStateFeatureProperties( 
   System.String
DisplayStateName
,
   out System.Object
Features
)
```
## Parameters

- `DisplayStateName` (System.String): Name of the display state
- `Features` (System.Object): Array of IFeature objects

## Return Value

Array of feature properties (see Remarks )

## Remarks

The material values returned include the face color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission. Valid values are from 0 to 1 for all variables.
If the return value is all -1 values, then material property values are not assigned to the feature.
The format of return value is an array of doubles as follows:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]

## See Also

- `IConfiguration.GetDisplayStateBodyProperties`
- `IConfiguration.GetDisplayStateComponentProperties`
- `IConfiguration.GetDisplayStateComponentVisibility`
- `IConfiguration.GetDisplayStateFaceProperties`
- `IConfiguration.GetDisplayStateProperties`
- `IConfiguration.GetDisplayStates`
- `IConfiguration.GetDisplayStatesCount`