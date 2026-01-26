---
type: method
interface: IConfiguration
member: GetDisplayStateBodyProperties
returns: System.Object
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Name of the display state
  -
    name: Bodies
    type: System.Object
    description: Array of IBody2 objects
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IConfiguration.GetDisplayStateComponentProperties
  - IConfiguration.GetDisplayStateComponentVisibility
  - IConfiguration.GetDisplayStateFaceProperties
  - IConfiguration.GetDisplayStateFeatureProperties
  - IConfiguration.GetDisplayStateProperties
  - IConfiguration.GetDisplayStates
  - IConfiguration.GetDisplayStatesCount
keywords:
  - display
  - states
  - getdisplaystatebodyproperties
  - iconfiguration
  - configuration
  - state
  - body
  - properties
  - name
  - string
  - bodies
  - object
---

# IConfiguration.GetDisplayStateBodyProperties

Gets the bodies and their material properties in the specified display state.

## Signature

```csharp
System.Object GetDisplayStateBodyProperties( 
   System.String
DisplayStateName
,
   out System.Object
Bodies
)
```
## Parameters

- `DisplayStateName` (System.String): Name of the display state
- `Bodies` (System.Object): Array of IBody2 objects

## Return Value

Array of body properties (see Remarks )

## Remarks

The material values returned include the face color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission. Valid values are from 0 to 1 for all variables.
If the return value is -1 values, then material property values are not assigned to the feature.
The format of the return value is an array of doubles as follows:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]

## See Also

- `IConfiguration.GetDisplayStateComponentProperties`
- `IConfiguration.GetDisplayStateComponentVisibility`
- `IConfiguration.GetDisplayStateFaceProperties`
- `IConfiguration.GetDisplayStateFeatureProperties`
- `IConfiguration.GetDisplayStateProperties`
- `IConfiguration.GetDisplayStates`
- `IConfiguration.GetDisplayStatesCount`