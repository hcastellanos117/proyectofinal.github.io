# Script para renombrar imagenes de productos a nombres limpios sin espacios
# Ejecutar desde la raiz del proyecto: powershell -ExecutionPolicy Bypass -File scripts/renameImages.ps1

$imageDir = "public/images"

# Mapeo de archivos actuales a nuevos nombres
$renameMap = @{
    "Screenshot 2025-07-26 042148.png" = "1-rosa-lavanda.png"
    "Screenshot 2025-07-26 042218.png" = "2-espiritu-corcel.png"
    "Screenshot 2025-07-26 042236.png" = "3-sol-flor.png"
    "Screenshot 2025-07-26 042251.png" = "4-encanto-rosa.png"
    "Screenshot 2025-07-26 042344.png" = "5-canela-especiada.png"
    "Screenshot 2025-07-26 042356.png" = "6-ramo-encantado.png"
    "Screenshot 2025-07-26 042408.png" = "7-encanto-osito.png"
    "Screenshot 2025-07-26 042421.png" = "8-menta-refrescante.png"
    "Screenshot 2025-07-26 042440.png" = "9-sandalo-mistico.png"
    "Screenshot 2025-07-26 042456.png" = "10-naranja-alegre.png"
    "Screenshot 2025-07-26 042510.png" = "11-bergamota-citrica.png"
    "Screenshot 2025-07-26 042526.png" = "12-cedro-bosque.png"
    "Screenshot 2025-07-26 042557.png" = "13-ylang-ylang.png"
    "Screenshot 2025-07-26 042612.png" = "14-romero-herbal.png"
    "Screenshot 2025-07-26 042624.png" = "15-geranio-floral.png"
    "Screenshot 2025-07-26 042639.png" = "16-pachuli-terroso.png"
    "Screenshot 2025-07-26 042652.png" = "17-mandarina-dulce.png"
    "Screenshot 2025-07-26 042707.png" = "18-tomillo-silvestre.png"
    "Screenshot 2025-07-26 042741.png" = "19-gardenia-nocturna.png"
    "Screenshot 2025-07-26 042757.png" = "20-albahaca-fresca.png"
    "Screenshot 2025-07-26 042814.png" = "21-vetiver-elegante.png"
    "Screenshot 2025-07-26 042838.png" = "22-pomelo-energizante.png"
    "Screenshot 2025-07-26 042855.png" = "23-incienso-sagrado.png"
    "Screenshot 2025-07-26 042909.png" = "24-lemongrass-tropical.png"
    "Screenshot 2025-07-26 042924.png" = "25-neroli-delicado.png"
    "Screenshot 2025-07-26 042938.png" = "26-cristal-aurora.png"
    "Screenshot 2025-07-26 042949.png" = "27-perla-oceano.png"
    "Screenshot 2025-07-26 043002.png" = "28-diamante-brillante.png"
    "Screenshot 2025-07-26 043017.png" = "29-esmeralda-bosque.png"
    "Screenshot 2025-07-26 043031.png" = "30-zafiro-nocturno.png"
    "Screenshot 2025-07-26 043043.png" = "31-rubi-pasion.png"
    "Screenshot 2025-07-26 043053.png" = "32-topacio-dorado.png"
    "Screenshot 2025-07-26 043106.png" = "33-amatista-mistico.png"
    "Screenshot 2025-07-26 043121.png" = "34-cuarzo-transparente.png"
    "Screenshot 2025-07-26 043134.png" = "35-jade-serenidad.png"
    "Screenshot 2025-07-26 043149.png" = "36-opalo-iridiscente.png"
    "Screenshot 2025-07-26 043210.png" = "37-turquesa-calma.png"
    "Screenshot 2025-07-26 043224.png" = "38-granate-intenso.png"
    "Screenshot 2025-07-26 043238.png" = "39-citrino-solar.png"
    "Screenshot 2025-07-26 043250.png" = "40-obsidiana-proteccion.png"
    "Screenshot 2025-07-26 043312.png" = "41-aguamarina-pureza.png"
    "Screenshot 2025-07-26 043336.png" = "42-peridoto-renovacion.png"
    "Screenshot 2025-07-26 043349.png" = "43-tanzanita-rara.png"
    "Screenshot 2025-07-26 043405.png" = "44-labradorita-magica.png"
    "Screenshot 2025-07-26 043417.png" = "45-moonstone-lunar.png"
    "Screenshot 2025-07-26 043533.png" = "46-sunstone-solar.png"
    "Screenshot 2025-07-26 043545.png" = "47-amazonita-equilibrio.png"
    "Screenshot 2025-07-26 043557.png" = "48-fluorita-claridad.png"
    "Screenshot 2025-07-26 043904.png" = "49-malaquita-transformacion.png"
    "Screenshot 2025-07-26 043917.png" = "50-hematita-fuerza.png"
    "Screenshot 2025-07-26 043932.png" = "51-navidad-tradicional.png"
    "Screenshot 2025-07-26 043948.png" = "52-halloween-misterioso.png"
    "Screenshot 2025-07-26 044001.png" = "53-san-valentin-amor.png"
    "Screenshot 2025-07-26 044012.png" = "54-pascua-renacimiento.png"
    "Screenshot 2025-07-26 044025.png" = "55-dia-madres.png"
    "Screenshot 2025-07-26 044041.png" = "56-dia-padres.png"
    "Screenshot 2025-07-26 044055.png" = "57-graduacion-exito.png"
    "Screenshot 2025-07-26 044126.png" = "58-cumpleanos-celebracion.png"
    "Screenshot 2025-07-26 044139.png" = "59-aniversario-bodas.png"
    "Screenshot 2025-07-26 044151.png" = "60-baby-shower.png"
    "Screenshot 2025-07-26 044201.png" = "61-despedida-soltera.png"
    "Screenshot 2025-07-26 044211.png" = "62-housewarming-hogar.png"
    "Screenshot 2025-07-26 044228.png" = "63-jubilacion-descanso.png"
    "Screenshot 2025-07-26 044242.png" = "64-accion-gracias.png"
    "Screenshot 2025-07-26 044257.png" = "65-ano-nuevo.png"
    "Screenshot 2025-07-26 044313.png" = "66-dia-independencia.png"
    "Screenshot 2025-07-26 044324.png" = "67-dia-trabajador.png"
    "Screenshot 2025-07-26 044346.png" = "68-dia-tierra.png"
    "Screenshot 2025-07-26 044402.png" = "69-dia-mujer.png"
    "Screenshot 2025-07-26 044414.png" = "70-dia-nino.png"
    "Screenshot 2025-07-26 044425.png" = "71-dia-abuelos.png"
    "Screenshot 2025-07-26 044458.png" = "72-dia-maestros.png"
    "Screenshot 2025-07-26 044515.png" = "73-dia-amistad.png"
    "Screenshot 2025-07-26 044531.png" = "74-fin-ano-reflexion.png"
}

Write-Host "Iniciando renombrado de imagenes..." -ForegroundColor Green

$renamedCount = 0
$errorCount = 0

foreach ($oldName in $renameMap.Keys) {
    $newName = $renameMap[$oldName]
    $oldPath = Join-Path $imageDir $oldName
    $newPath = Join-Path $imageDir $newName
    
    if (Test-Path $oldPath) {
        try {
            Rename-Item -Path $oldPath -NewName $newName -Force
            Write-Host "Renombrado: $oldName -> $newName" -ForegroundColor Cyan
            $renamedCount++
        }
        catch {
            Write-Host "Error renombrando $oldName" -ForegroundColor Red
            $errorCount++
        }
    }
    else {
        Write-Host "Archivo no encontrado: $oldName" -ForegroundColor Yellow
        $errorCount++
    }
}

Write-Host "Resumen:" -ForegroundColor Green
Write-Host "Archivos renombrados: $renamedCount" -ForegroundColor Cyan
Write-Host "Errores: $errorCount" -ForegroundColor Red

if ($renamedCount -gt 0) {
    Write-Host "Renombrado completado! Ejecuta npm run dev para ver los cambios." -ForegroundColor Green
}