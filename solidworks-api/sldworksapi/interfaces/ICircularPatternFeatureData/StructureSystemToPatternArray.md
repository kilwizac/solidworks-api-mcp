---
type: property
interface: ICircularPatternFeatureData
member: StructureSystemToPatternArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - structuresystemtopatternarray
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - structure
  - array
  - object
readonly: null
---

# ICircularPatternFeatureData.StructureSystemToPatternArray

Gets or sets the structure systems to pattern in this circular pattern feature.

## Signature

```csharp
System.Object StructureSystemToPatternArray {get; set;}
```
## Parameters

None.

## Return Value

Array of IStructureSystemFolder s

## Remarks

This property is valid only if
ICircularPatternFeatureData::BodyPattern
is true.
Use the setter of this property to change structure systems to pattern only after the feature has been created.
Before using this property in .NET code, read
IDispatch Object Arrays as Input in .NET
. To remove a structure system from the pattern, set this property to a DispatchWrapper array containing one null element.
For more information, see the
SOLIDWORKS Design user-interface help > Weldments and Structure System > Pattern and Mirror Support
topic.