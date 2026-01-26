---
type: pattern
title: Create Surface Feature from Body Example (VBA)
keywords:
  - create
  - surface
  - feature
  - body
  - example
  - vba
categories:
  - documents
related: []
---

# Create Surface Feature from Body Example (VBA)

This example shows how to create a surface feature from a body.

## Code

```vb
'---------------------------------------
'
' Preconditions: Part document is open and contains one solid body.
'
' Postconditions: A new part document is created and a surface feature
' is created using the body in the open part document.
'
'----------------------------------------
 
Option Explicit
 
Public Enum swCreateFacesBodyAction_e
    swCreateFacesBodyActionCap = 1
    swCreateFacesBodyActionGrow = 2
    swCreateFacesBodyActionGrowFromParent = 3
    swCreateFacesBodyActionLeaveRubber = 4
End Enum
 
Public Enum swCreateFeatureBodyOpts_e
    swCreateFeatureBodyCheck = &H1
    swCreateFeatureBodySimplify = &H2
End Enum
 
Sub main()
 
    Dim swApp As SldWorks.SldWorks
    Dim swModeler As SldWorks.Modeler
    Dim swModel As SldWorks.ModelDoc2
    Dim swPart As SldWorks.PartDoc
    Dim swNewPart As SldWorks.PartDoc
    Dim swNewModel As SldWorks.ModelDoc2
    Dim swBody As SldWorks.Body2
    Dim swTempBody As SldWorks.Body2
    Dim swFace() As SldWorks.Face2
    Dim swDelFace() As SldWorks.Face2
    Dim swFirstFace As SldWorks.Face2
    Dim vFace As Variant
    Dim vFeatArr As Variant
    Dim vFeat As Variant
    Dim swFeat As SldWorks.Feature
    Dim bLocChk As Boolean
    Dim bRet As Boolean
 
    Set swApp = Application.SldWorks
    Set swModeler = swApp.GetModeler
    Set swModel = swApp.ActiveDoc
    Set swPart = swModel
    Set swBody = swPart.Body
    Set swNewPart = swApp.NewPart
    Set swNewModel = swNewPart
    
    ReDim swFace(0)
    Set swFace(0) = swBody.GetFirstFace
    
    Do While Not swFace(UBound(swFace)) Is Nothing
        ReDim Preserve swFace(UBound(swFace) + 1)
        Set swFace(UBound(swFace)) = swFace(UBound(swFace) - 1).GetNextFace
    Loop
    
    ReDim Preserve swFace(UBound(swFace))
    vFace = swFace
    
    Set swTempBody = swModeler.CreateBodyFromFaces2(UBound(vFace), vFace, swCreateFacesBodyActionCap, True, bLocChk): Debug.Assert bLocChk
    
    vFeatArr = swNewPart.CreateSurfaceFeatureFromBody(swTempBody, swCreateFeatureBodyCheck)
    For Each vFeat In vFeatArr
        Set swFeat = vFeat
        
        bRet = swFeat.Select2(False, 0): Debug.Assert bRet
        bRet = swNewModel.EditSuppress2: Debug.Assert bRet
        
        bRet = swFeat.Select2(False, 0): Debug.Assert bRet
        bRet = swNewModel.EditUnsuppress2: Debug.Assert bRet
        
    Next vFeat
    
End Sub
'---------------------------------
```
