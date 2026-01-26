---
type: property
interface: ICoreFeatureData
member: Depth
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Direction to extract core as defined in swCoreFeatureDirection_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - depth
  - icorefeaturedata
  - core
  - feature
  - data
  - index
  - int32
  - double
  - vb
  - net
  - vba
readonly: null
---

# ICoreFeatureData.Depth

Gets or sets the depth in the specified direction of this core feature.

## Signature

```csharp
System.Double Depth( 
   System.Int32
Index
) {get; set;}
```
## Parameters

- `Index` (System.Int32): Direction to extract core as defined in swCoreFeatureDirection_e

## Return Value

Depth

## Examples

- Get Core Feature Data (C#) (Get_Core_Feature_Example_CSharp.htm)
- Get Core Feature Data (VB.NET) (Get_Core_Feature_Example_VBNET.htm)
- Get Core Feature Data (VBA) (Get_Core_Feature_Example_VB.htm)