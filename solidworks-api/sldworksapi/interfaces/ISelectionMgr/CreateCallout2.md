---
type: method
interface: ISelectionMgr
member: CreateCallout2
returns: Callout
parameters:
  -
    name: NumberOfRows
    type: System.Int32
    description: Number of rows in the callout
  -
    name: LpHandler
    type: System.Object
    description: Pointer to the event handler for the callout ( ISwCalloutHandler )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - ISelectionMgr.SetCallout
keywords:
  - callout
  - see
  - also
  - icallout
  - create
  - objects
  - callouts
  - createcallout2
  - iselectionmgr
  - selection
  - mgr
  - callout2
  - number
  - rows
  - int32
  - lp
  - handler
  - object
  - multi
  - row
  - vba
---

# ISelectionMgr.CreateCallout2

Creates a callout for the selection.

## Signature

```csharp
Callout CreateCallout2( 
   System.Int32
NumberOfRows
,
   System.Object
LpHandler
)
```
## Parameters

- `NumberOfRows` (System.Int32): Number of rows in the callout
- `LpHandler` (System.Object): Pointer to the event handler for the callout ( ISwCalloutHandler )

## Return Value

Callout

## Remarks

To create a callout independent of a selection, use
IModelDocExtension::CreateCallout
.

## Examples

- Create Multi-row Callouts (VBA) (Create_Multi-row_Callouts_Example_VB.htm)

## See Also

- `ISelectionMgr.SetCallout`