---
type: method
interface: IModelDoc2
member: InsertAxis2
returns: System.Boolean
parameters:
  -
    name: AutoSize
    type: System.Boolean
    description: True if axis is to be automatically sized, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - axes
  - reference
  - axis
  - see
  - irefaxis
  - irefaxisfeaturedata
  - interfaces
  - insertaxis2
  - imodeldoc2
  - model
  - doc2
  - insert
  - axis2
  - auto
  - size
  - boolean
  - create
  - revolve
  - features
  - vba
  - vb
  - net
---

# IModelDoc2.InsertAxis2

Inserts a reference axis based on the currently selected items with an option to automatically size the axis.

## Signature

```csharp
System.Boolean InsertAxis2( 
   System.Boolean
AutoSize
)
```
## Parameters

- `AutoSize` (System.Boolean): True if axis is to be automatically sized, false if not

## Return Value

True if the reference axis is created successfully, false if not

## Examples

- Create Revolve Features (VBA) (Create_Revolve_Features_Example_VB.htm)
- Create Revolve Features (VB.NET) (Create_Revolve_Features_Example_VBNET.htm)
- Create Revolve Features (C#) (Create_Revolve_Features_Example_CSharp.htm)