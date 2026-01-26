---
type: method
interface: IModelDocExtension
member: CreateCallout
returns: Callout
parameters:
  -
    name: NumberOfRows
    type: System.Int32
    description: Number of rows in the callout
  -
    name: Handler
    type: System.Object
    description: Pointer to the event handler for the callout ( ISwCalloutHandler )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - callout
  - see
  - also
  - icallout
  - create
  - createcallout
  - imodeldocextension
  - model
  - doc
  - extension
  - number
  - rows
  - int32
  - handler
  - object
  - independent
  - selection
  - vb
  - net
  - vba
---

# IModelDocExtension.CreateCallout

Creates a callout independent of a selection.

## Signature

```csharp
Callout CreateCallout( 
   System.Int32
NumberOfRows
,
   System.Object
Handler
)
```
## Parameters

- `NumberOfRows` (System.Int32): Number of rows in the callout
- `Handler` (System.Object): Pointer to the event handler for the callout ( ISwCalloutHandler )

## Return Value

Callout

## Remarks

This method allows you to create a callout independently of a selection. You can define the position of the callout using the
ICallout::Position
and
ICallout::SetTargetPoint
.
To create a callout dependent on a selection, use
ISelectionMgr::CreateCallout2
.

## Examples

- Create a Callout Independent of a Selection (VB.NET) (Create_a_Callout_Independent_of_a_Selection_Example_VBNET.htm)
- Create a Callout Independent of a Selection (VBA) (Create_a_Callout_Independent_of_a_Selection_Example_VB.htm)
- Create a Callout Independent of a Selection (C#) (Create_a_Callout_Independent_of_a_Selection_Example_CSharp.htm)