---
type: method
interface: IModelViewManager
member: CreateFeatureMgrWindowFromHandlex64
returns: FeatMgrView
parameters:
  -
    name: BitMapFile
    type: System.String
    description: Fully qualified path to the bitmap file that you want to use for the control
  -
    name: WindowHandle
    type: System.Int64
    description: Handle of the .NET tab control
  -
    name: ToolTip
    type: System.String
    description: Text for the ToolTip
  -
    name: WhichPane
    type: System.Int32
    description: Pane to use as defined in swFeatMgrPane_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - IModelViewManager.CreateFeatureMgrWindowFromHandle
  - IModelViewManager.DisplayWindowFromHandlex64
keywords:
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - net
  - controls
  - createfeaturemgrwindowfromhandlex64
  - imodelviewmanager
  - model
  - view
  - manager
  - create
  - feature
  - mgr
  - window
  - handlex64
  - bit
  - map
  - file
  - string
  - handle
  - int64
  - tool
  - tip
  - which
  - pane
  - int32
  - feat
  - add
  - solidworks
  - using
  - vb
---

# IModelViewManager.CreateFeatureMgrWindowFromHandlex64

On 64-bit machines, creates a new view in the FeatureManager design tree using the specified .NET tab control.

## Signature

```csharp
FeatMgrView CreateFeatureMgrWindowFromHandlex64( 
   System.String
BitMapFile
,
   System.Int64
WindowHandle
,
   System.String
ToolTip
,
   System.Int32
WhichPane
)
```
## Parameters

- `BitMapFile` (System.String): Fully qualified path to the bitmap file that you want to use for the control
- `WindowHandle` (System.Int64): Handle of the .NET tab control
- `ToolTip` (System.String): Text for the ToolTip
- `WhichPane` (System.Int32): Pane to use as defined in swFeatMgrPane_e

## Return Value

IFeatMgrView

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.

## Examples

- Add .NET Controls to SOLIDWORKS using an Add-in (C#) (Add_.NET_Controls_to_SOLIDWORKS_Using_an_Add-in_Example_CSharp.htm)
- Add .NET Controls to SOLIDWORKS using an Add-in (VB.NET) (Add_.NET_Controls_to_SolidWorks_Using_an_Add-in_Example_VBNET.htm)

## See Also

- `IModelViewManager.CreateFeatureMgrWindowFromHandle`
- `IModelViewManager.DisplayWindowFromHandlex64`