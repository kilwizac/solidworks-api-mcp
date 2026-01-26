---
type: property
interface: ICoreFeatureData
member: EndCondition
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Direction of end conditions as defined in swCoreFeatureDirection_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - endcondition
  - icorefeaturedata
  - core
  - feature
  - data
  - end
  - condition
  - index
  - int32
  - vb
  - net
  - vba
readonly: null
---

# ICoreFeatureData.EndCondition

Gets or sets the end condition in the specified direction for this core feature.

## Signature

```csharp
System.Int32 EndCondition( 
   System.Int32
Index
) {get; set;}
```
## Parameters

- `Index` (System.Int32): Direction of end conditions as defined in swCoreFeatureDirection_e

## Return Value

Type of end conditions as defined in swEndConditions_e (see Remarks )

## Remarks

Valid end conditions are swEndConditions_e:
swEndCondBlind
swEndCondThroughAll
swEndCondThroughNext

## Examples

- Get Core Feature Data (C#) (Get_Core_Feature_Example_CSharp.htm)
- Get Core Feature Data (VB.NET) (Get_Core_Feature_Example_VBNET.htm)
- Get Core Feature Data (VBA) (Get_Core_Feature_Example_VB.htm)