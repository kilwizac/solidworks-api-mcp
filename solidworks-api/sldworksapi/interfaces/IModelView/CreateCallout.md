---
type: method
interface: IModelView
member: CreateCallout
returns: Callout
parameters:
  -
    name: NumberOfRows
    type: System.Int32
    description: Number of rows in the callout
  -
    name: LpHandler
    type: System.Object
    description: Pointer to ISwCalloutHandler
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - callout
  - see
  - also
  - icallout
  - model
  - views
  - createcallout
  - imodelview
  - view
  - create
  - number
  - rows
  - int32
  - lp
  - handler
  - object
  - vba
  - vb
  - net
---

# IModelView.CreateCallout

Creates a callout on this model view.

## Signature

```csharp
Callout CreateCallout( 
   System.Int32
NumberOfRows
,
   System.Object
LpHandler
)
```
## Parameters

- `NumberOfRows` (System.Int32): Number of rows in the callout
- `LpHandler` (System.Object): Pointer to ISwCalloutHandler

## Return Value

An ICallout object

## Examples

- Create a Callout in a Model View (VBA) (Create_Model_View_Callouts_Example_VB.htm)
- Create a Callout in a Model View (VB.NET) (Create_Model_View_Callouts_Example_VBNET.htm)
- Create a Callout in a Model View (C#) (Create_Model_View_Callouts_Example_CSharp.htm)