---
type: property
interface: IMirrorSolidFeatureData
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
  - imirrorsolidfeaturedata
  - mirror
  - solid
  - feature
  - data
  - structure
  - pattern
  - array
  - object
readonly: null
---

# IMirrorSolidFeatureData.StructureSystemToPatternArray

Gets or sets the structure systems to pattern in this mirror solid feature.

## Signature

```csharp
System.Object StructureSystemToPatternArray {get; set;}
```
## Parameters

None.

## Return Value

Array of IStructureSystemFolder s

## Remarks

Use this property to change structure systems only after the mirror solid feature has been created.
Before using this property in .NET code, read
IDispatch Object Arrays as Input in .NET
. To remove a structure system from the pattern, set this property to a DispatchWrapper array containing one null element.
For more information, see the
SOLIDWORKS Design user-interface help > Weldments and Structure System > Pattern and Mirror Support
topic.